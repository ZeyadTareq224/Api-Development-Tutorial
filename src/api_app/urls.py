from django.urls import path, include
from .views import ArticleListView, ArticleRetrieveView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [

    #api urls

    path('articles/', ArticleListView.as_view(), name="articles"),
    path('articles/<int:pk>/', ArticleRetrieveView.as_view(), name="articles-obj"),
    path('articles/create/', ArticleCreateView.as_view(), name="articles-create"),
    path('articles/<int:pk>/update/', ArticleUpdateView.as_view(), name="articles-update"),
    path('articles/<int:pk>/delete/', ArticleDeleteView.as_view(), name="articles-delete"),

    #auth urls

    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),    

]


