from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def home(request):
    data = {
        'message': "welcome to ticket booking website."
    }
    return JsonResponse(data=data)
