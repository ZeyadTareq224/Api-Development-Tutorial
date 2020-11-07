from django.urls import path
from .views import ArticleListView, ArticleRetrieveView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView


urlpatterns = [
    path('articles/', ArticleListView.as_view(), name="articles"),
    path('articles/<int:pk>/', ArticleRetrieveView.as_view(), name="articles-obj"),
    path('articles/create/', ArticleCreateView.as_view(), name="articles-create"),
    path('articles/<int:pk>/update', ArticleUpdateView.as_view(), name="articles-update"),
    path('articles/<int:pk>/delete', ArticleDeleteView.as_view(), name="articles-delete"),
    
]
