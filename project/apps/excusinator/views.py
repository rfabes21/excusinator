from django.views.generic import TemplateView
from django.core.urlresolvers import reverse


class HomeView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, *args, **kwargs):
        context = super(HomeView, self).get_context_data(*args, **kwargs)
        # context['object'] = models.Home.objects.first()
        return context
