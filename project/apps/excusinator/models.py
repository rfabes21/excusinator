from django.db import models


class Home(models.Model):

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Page"


class Excuse(models.Model):

    class Meta:
        verbose_name = "Excuse"
        verbose_name_plural = "Excuses"
