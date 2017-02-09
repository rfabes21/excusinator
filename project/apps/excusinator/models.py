from django.db import models


class Home(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    subtitle = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Page"


class ExcuseType(models.Model):
    label = models.CharField(max_length=255)

    def __unicode__(self):
        return self.label

    class Meta:
        verbose_name = "Excuse Type"
        verbose_name_plural = "Excuse Types"


class Excuse(models.Model):
    title = models.CharField(max_length=255)
    excuse_copy = models.TextField()
    excuse_type = models.ForeignKey(
        "ExcuseType", related_name="excuses", blank=True, null=True)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = "Excuse"
        verbose_name_plural = "Excuses"
