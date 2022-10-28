<?php

use Illuminate\Http\Request;
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
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);

Route::post('/user_register', [passAuthController::class, 'register']);
Route::post('/user_login', [passAuthController::class, 'login']);

Route::get('/show_token', [StudentController::class, 'showToken']);
Route::post('/show_test',[StudentController::class, 'show_test']);
Route::post('/students_store', [StudentController::class, 'store']);
Route::post('/student_update', [StudentController::class, 'update']);
Route::post('/student_destroy', [StudentController::class, 'destroy']);

Route::post('/show_students_by_program', [ProgramController::class, 'show_students_by_program']);


