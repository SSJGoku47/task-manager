<template>
    <button class="layout-config-button p-link" type="button" @click="onConfigButtonClick">
        <i class="pi pi-cog"></i>
    </button>

    <Sidebar v-model:visible="visible" position="right" class="layout-config-sidebar w-26rem" pt:closeButton="ml-auto">
        <div class="p-2">
            <!-- Configuration panel content goes here -->
            <!-- Scale section -->
            <section class="flex pb-4 align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Scale</span>
                <div class="flex gap-2 px-2 py-1 align-items-center border-1 surface-border" style="border-radius: 30px">
                    <Button icon="pi pi-minus" @click="decrementScale" text rounded :disabled="layoutConfig.scale.value === scales[0]" />
                    <i v-for="s in scales" :key="s" :class="['pi pi-circle-fill text-sm text-200', { 'text-lg text-primary': s === layoutConfig.scale.value }]" />
                    <Button icon="pi pi-plus" @click="incrementScale" text rounded :disabled="layoutConfig.scale.value === scales[scales.length - 1]" />
                </div>
            </section>

            <!-- Dark Mode section -->
            <section class="flex py-4 align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Dark Mode</span>
                <InputSwitch :modelValue="layoutConfig.darkTheme.value" @update:modelValue="onDarkModeChange" />
            </section>

            <!-- Menu Type section -->
            <template v-if="!simple">
                <section class="flex py-4 align-items-center justify-content-between border-bottom-1 surface-border">
                    <span class="text-xl font-semibold">Menu Type</span>
                    <SelectButton :modelValue="layoutConfig.menuMode.value" @update:modelValue="onMenuModeChange" :options="menuModes" optionLabel="label" optionValue="value" :allowEmpty="false" />
                </section>

                <!-- Input Variant section -->
                <section class="flex py-4 align-items-center justify-content-between border-bottom-1 surface-border">
                    <span class="text-xl font-semibold">Input Variant</span>
                    <SelectButton :modelValue="inputStyle" @update:modelValue="onInputStyleChange" :options="inputStyles" optionLabel="label" optionValue="value" :allowEmpty="false" />
                </section>
            </template>

            <!-- Ripple Effect section -->
            <section class="flex py-4 align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Ripple Effect</span>
                <InputSwitch :modelValue="layoutConfig.ripple.value" @update:modelValue="onRippleChange" />
            </section>

            <!-- Themes section -->
            <section class="py-4 border-bottom-1 surface-border">
                <div class="mb-3 text-xl font-semibold">Themes</div>
                <div class="flex gap-2 mb-3 align-items-center">
                    <img src="https://primefaces.org/cdn/primevue/images/themes/aura.png" alt="Aura" style="width: 1.5rem" />
                    <span class="font-medium">Aura</span>
                </div>
                <div class="flex gap-3 mb-3 align-items-center justify-content-between">
                    <button :class="themeButtonClass('aura', 'green')" style="border-radius: 30px" @click="changeTheme('aura', 'green')">
                        <span class="block w-full h-1rem" style="border-radius: 30px; background: linear-gradient(180deg, #4dac9c 0%, rgba(77, 172, 156, 0.5) 100%)"></span>
                    </button>
                    <!-- Add more theme buttons as needed -->
                </div>
                <!-- Add more theme sections as needed -->
            </section>
        </div>
    </Sidebar>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useLayout } from './composables/layout.js';

defineProps({
    simple: {
        type: Boolean,
        default: false
    }
});

const $primevue = usePrimeVue();
const inputStyle = computed(() => $primevue.config.inputStyle || 'outlined');

const scales = ref([12, 13, 14, 15, 16]);
const visible = ref(false);
const inputStyles = ref([
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' }
]);
const menuModes = ref([
    { label: 'Static', value: 'static' },
    { label: 'Overlay', value: 'overlay' }
]);
const compactMaterial = ref(false);
const primaryFocusRing = ref(true);

const { setScale, layoutConfig } = useLayout();

const onConfigButtonClick = () => {
    visible.value = !visible.value;
};
const onChangeTheme = (theme, mode) => {
    $primevue.changeTheme(layoutConfig.theme.value, theme, 'theme-css', () => {
        layoutConfig.theme.value = theme;
        layoutConfig.darkTheme.value = mode;
    });
};
const decrementScale = () => {
    setScale(layoutConfig.scale.value - 1);
    applyScale();
};
const incrementScale = () => {
    setScale(layoutConfig.scale.value + 1);
    applyScale();
};
const applyScale = () => {
    document.documentElement.style.fontSize = layoutConfig.scale.value + 'px';
};
const onInputStyleChange = (value) => {
    $primevue.config.inputStyle = value;
};
const onMenuModeChange = (value) => {
    layoutConfig.menuMode.value = value;
};
const onRippleChange = (value) => {
    layoutConfig.ripple.value = value;
};
const onDarkModeChange = (value) => {
    const newThemeName = value ? layoutConfig.theme.value.replace('light', 'dark') : layoutConfig.theme.value.replace('dark', 'light');

    layoutConfig.darkTheme.value = value;
    onChangeTheme(newThemeName, value);
};
const changeTheme = (theme, color) => {
    let newTheme, dark;

    newTheme = theme + '-' + (layoutConfig.darkTheme.value ? 'dark' : 'light');

    if (color) {
        newTheme += '-' + color;
    }

    if (newTheme.startsWith('md-') && compactMaterial.value) {
        newTheme = newTheme.replace('md-', 'mdc-');
    }

    dark = layoutConfig.darkTheme.value;

    onChangeTheme(newTheme, dark);
};
const isThemeActive = (themeFamily, color) => {
    let themeName;
    let themePrefix = themeFamily === 'md' && compactMaterial.value ? 'mdc' : themeFamily;

    themeName = themePrefix + (layoutConfig.darkTheme.value ? '-dark' : '-light');

    if (color) {
        themeName += '-' + color;
    }

    return layoutConfig.theme.value === themeName;
};
const onCompactMaterialChange = (value) => {
    compactMaterial.value = value;

    if (layoutConfig.theme.value.startsWith('md')) {
        let tokens = layoutConfig.theme.value.split('-');

        changeTheme(tokens[0].substring(0, 2), tokens[2]);
    }
};
const onFocusRingColorChange = (value) => {
    primaryFocusRing.value = value;
    let root = document.documentElement;

    if (value) {
        if (layoutConfig.darkTheme.value) root.style.setProperty('--focus-ring-color', 'var(--primary-color-text)');
        else root.style.setProperty('--focus-ring-color', 'var(--primary-color)');
    } else {
        root.style.removeProperty('--focus-ring-color');
    }
};
const themeButtonClass = (theme, color) => {
    return [
        'w-3rem h-2.5rem cursor-pointer transition-all transition-duration-300 border-2 surface-border',
        {
            'border-primary': isThemeActive(theme, color),
            'surface-card': !isThemeActive(theme, color)
        }
    ];
};
</script>
