from django.shortcuts import render
from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer


# Create your views here.
class ArticleListView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class ArticleRetrieveView(generics.RetrieveAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class ArticleCreateView(generics.CreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class ArticleUpdateView(generics.UpdateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class ArticleDeleteView(generics.DestroyAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()