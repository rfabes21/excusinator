# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Excuse',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=255)),
                ('excuse_copy', models.TextField()),
            ],
            options={
                'verbose_name': 'Excuse',
                'verbose_name_plural': 'Excuses',
            },
        ),
        migrations.CreateModel(
            name='ExcuseType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('label', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'Excuse Type',
                'verbose_name_plural': 'Excuse Types',
            },
        ),
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
            options={
                'verbose_name': 'Home Page',
                'verbose_name_plural': 'Home Page',
            },
        ),
    ]
