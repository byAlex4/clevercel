<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 
        $student = new Student;
        $student -> name = $request -> name;
        $student -> last_name = $request -> last_name;
        $student -> email = $request -> email;
        $student -> semester = $request -> semester;
        $student -> program_id = $request -> program_id;
        $student -> save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
        $student = Student::find($request -> id);
        $student -> name = $request -> name;
        $student -> last_name = $request -> last_name;
        $student -> email = $request -> email;
        $student -> semester = $request -> semester;
        $student -> program_id = $request -> program_id;
        $student -> save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Student $student)
    {
        //
        $student = Student::find($request -> id);
        $student -> delete();
    }

    public function showToken(){
        echo csrf_token();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show_test(Request $request, Student $student){
        $student = Student::where('email', $request->email)->get();  
        //$student = Student::where('name', $request->name)->get();
        return $student;
    }
}
