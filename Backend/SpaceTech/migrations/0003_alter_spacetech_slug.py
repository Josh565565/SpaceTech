# Generated by Django 4.2.5 on 2023-10-04 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SpaceTech', '0002_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spacetech',
            name='slug',
            field=models.SlugField(max_length=255, unique=True),
        ),
    ]
