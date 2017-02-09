from django.views.generic import TemplateView
# from django.core.urlresolvers import reverse
from rest_framework.viewsets import ModelViewSet
from .serializers import ExcuseTypesSerializer, ExcusesSerializer
from .models import ExcuseType, Excuse, Home


class HomeView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, *args, **kwargs):
        context = super(HomeView, self).get_context_data(*args, **kwargs)
        context['object'] = Home.objects.first()
        return context


class ExcuseTypesAPIView(ModelViewSet):
    queryset = ExcuseType.objects.all()
    serializer_class = ExcuseTypesSerializer


class ExcusesAPIView(ModelViewSet):
    queryset = Excuse.objects.all()
    serializer_class = ExcusesSerializer
