# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('excusinator', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='excuse',
            name='excuse_type',
            field=models.ForeignKey(related_name='excuses', blank=True, to='excusinator.ExcuseType', null=True),
        ),
    ]
