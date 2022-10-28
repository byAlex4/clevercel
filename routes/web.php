<?php

use Illuminate\Support\Facades\Route;
use App\Models\Program;
use App\Models\Student;
use App\Models\User;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\passAuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/show_token', [StudentController::class, 'showToken']);
Route::post('/students_store', [StudentController::class, 'store']);
Route::post('/show_students_by_program', [ProgramController::class, 'show_students_by_program']);
Route::post('/student_update', [StudentController::class, 'update']);
Route::post('/student_destroy', [StudentController::class, 'destroy']);
Route::post('/show_test', [StudentController::class, 'showTest']);