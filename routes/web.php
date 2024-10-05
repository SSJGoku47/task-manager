<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->name('home');


// Route::middleware(['auth'])->group(function () {
//     Route::get('/roles', function () {
//         return Inertia::render('Roles/AllRoles');
//     })->name('roles');

//     Route::get('/role/create', function () {
//         return Inertia::render('Roles/AddEditRole', ['mode' => 'create']);
//     })->name('role.create');

//     Route::get('/role/edit/{id}', function ($id) {
//         return Inertia::render('Roles/AddEditRole', ['mode' => 'edit', 'id' => $id]);
//     })->name('role.edit');

//     Route::get('/role/view/{id}', function ($id) {
//         return Inertia::render('Roles/ViewRole', ['id' => $id]);
//     })->name('role.view');
// });


Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/users', [DashboardController::class, 'users']);

Route::get('/overview', [DashboardController::class, 'index']);
Route::get('/map', [DashboardController::class, 'index']);
Route::get('/departments', [DashboardController::class, 'index']);
Route::get('/doctors', [DashboardController::class, 'index']);
Route::get('/history', [DashboardController::class, 'index']);
Route::get('/settings', [DashboardController::class, 'index']);


Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

