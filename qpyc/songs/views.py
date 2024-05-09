from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
# from .forms import SongForm


# Create your views here.

# from .models import Song


# def index(request):
#     query = request.GET.get('q')
#     if query:
#         songs = Song.objects.filter(title__icontains=query)
#     else:
#         songs = Song.objects.all()

#     # form = SongForm()
#     return render(request, 'songs/index.html', {'songs': songs,})

def index(request):
    return render(request, 'songs/index.html')