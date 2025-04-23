from django.shortcuts import render, redirect

def home(request):
    render(request,'index1.html')