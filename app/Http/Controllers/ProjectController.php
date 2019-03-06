<?php

 namespace App\Http\Controllers;

 use Illuminate\Http\Request;
 use App\Project;
 use App\Task;

 class ProjectController extends Controller
 {

    public function all() {
        return Project::all();
    }

    public function store() {
        Project::create(request()->all());

        return response()->json('success');
    }

 }