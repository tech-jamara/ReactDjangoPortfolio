# Generated by Django 4.0.2 on 2022-03-12 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0003_remove_aboutme_content_aboutme_description_one_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicesoffred',
            name='shadow_icon',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
    ]
