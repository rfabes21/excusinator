# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('excusinator', '0002_excuse_excuse_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='subtitle',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='home',
            name='title',
            field=models.CharField(max_length=255, null=True, blank=True),
        ),
    ]
