<!-- File: SettingsPanel.vue -->
<template>
  <div>
    <div @click="toggleSidebar"
      class="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-5 mr-5 text-[var(--icon-text)] font-bold bg-[var(--icon-color-1)] opacity-80 hover:opacity-100 rounded-full shadow-lg cursor-pointer h-14 w-14 bg-theme-1 default_pointer_land"
      data-tw-toggle="modal" data-tw-target="#theme-switcher">
      <i class="pi pi-spin pi-cog" style="font-size: 1.5rem"></i>
    </div>
    <Dialog v-model:visible="isPanelOpen" header="Setting" class="flex w-80">
      <div class="p-4">
        <!-- Configuration panel content goes here -->
        <!-- Scale section -->
        <section class="flex items-center justify-between pb-2 border-b border-gray-300">
          <span class="text-sm font-medium">Scale</span>
          <div class="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full">
            <Button icon="pi pi-minus" @click="decrementScale" text rounded
              :disabled="layoutConfig.scale.value === scales[0]" />
            <i v-for="s in scales" :key="s"
              :class="['pi pi-circle-fill text-xs', { 'text-primary': s === layoutConfig.scale.value, 'text-gray-400': s !== layoutConfig.scale.value }]" />
            <Button icon="pi pi-plus" @click="incrementScale" text rounded
              :disabled="layoutConfig.scale.value === scales[scales.length - 1]" />
          </div>
        </section>

        <!-- Dark Mode section -->
        <section class="flex items-center justify-between py-2 border-b border-gray-300">
          <span class="text-sm font-medium">Dark Mode</span>
          <InputSwitch :modelValue="layoutConfig.darkTheme.value" @update:modelValue="onDarkModeChange" />
        </section>

        <!-- Menu Type section -->
        <template v-if="!simple">
          <section class="flex items-center justify-between py-2 border-b border-gray-300">
            <span class="text-sm font-medium">Menu Type</span>
            <SelectButton :modelValue="layoutConfig.menuMode.value" @update:modelValue="onMenuModeChange"
              :options="menuModes" optionLabel="label" optionValue="value" :allowEmpty="false" />
          </section>

          <!-- Input Variant section -->
          <section class="flex items-center justify-between py-2 border-b border-gray-300">
            <span class="text-sm font-medium">Input Variant</span>
            <SelectButton :modelValue="inputStyle" @update:modelValue="onInputStyleChange" :options="inputStyles"
              optionLabel="label" optionValue="value" :allowEmpty="false" />
          </section>
        </template>

        <!-- Ripple Effect section -->
        <section class="flex items-center justify-between py-2 border-b border-gray-300">
          <span class="text-sm font-medium">Ripple Effect</span>
          <InputSwitch :modelValue="layoutConfig.ripple.value" @update:modelValue="onRippleChange" />
        </section>
      </div>
    </Dialog>
  </div>
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

const isPanelOpen = ref(false);
const color = ref('#ffffff');


const toggleSidebar = () => {
  isPanelOpen.value = !isPanelOpen.value;
};


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
    if (layoutConfig.scale.value > scales.value[0]) {
        layoutConfig.scale.value -= 1;
        applyScale();
    }
};

const incrementScale = () => {
    if (layoutConfig.scale.value < scales.value[scales.value.length - 1]) {
        layoutConfig.scale.value += 1;
        applyScale();
    }
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

<style scoped>
@import '../Layout/css/custom-layout.css';
</style>