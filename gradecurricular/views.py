from django.shortcuts import render

def gradecurricular_home(request):
    return render(request, './static/HTML/index.html')