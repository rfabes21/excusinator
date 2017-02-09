# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    url(r'^$', views.HomeView.as_view(), name="home"),
    url(r'^api/excuse-types/$',
        views.ExcuseTypesAPIView.as_view({'get': 'list'}),
        name='api_excuse_types'),
    url(r'^api/excuses/$',
        views.ExcusesAPIView.as_view({'get': 'list'}), name='api_excuses'),
    url(r'^404/$', TemplateView.as_view(template_name="404.html")),
    url(r'^500/$', TemplateView.as_view(template_name="500.html")),
]
