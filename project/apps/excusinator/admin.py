from django.contrib import admin
try:
    from mezzanine.utils.admin import SingletonAdmin
except Exception:
    from mezzanine.core.admin import SingletonAdmin
from . import models


@admin.register(models.Home)
class HomeAdmin(SingletonAdmin):
    pass


@admin.register(models.ExcuseType)
class ExcuseTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Excuse)
class ExcuseAdmin(admin.ModelAdmin):
    pass
