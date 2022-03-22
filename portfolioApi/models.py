from turtle import title
from wsgiref.simple_server import server_version
from django.db import models


class AllIcons(models.Model):
    icon_name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.icon_name


class HomeDetails(models.Model):
    greeting = models.CharField(max_length=30, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    job_title = models.CharField(max_length=100, blank=True, null=True)
    par_inro=models.TextField(blank=True, null=True)
    avatar_img = models.ImageField(default='', blank=True)
    hireMe_link =models.URLField(blank=True, null=True)
    cv_link =models.URLField(blank=True, null=True)


    class Meta:
        verbose_name_plural = 'HomeDetails'

    def __str__(self):
        return self.name


class SocialMediaLinks(models.Model):
    social_icon = models.CharField(max_length=60, blank=True, null=True)

    link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'SocialMediaLinks'


class AboutMe(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    title_2 = models.CharField(max_length=100, blank=True, null=True)
    description_one = models.TextField(blank=True, null=True)
    description_two = models.TextField(blank=True, null=True)
    about_avatar = models.ImageField(default='', blank=True)

    class Meta:
        verbose_name_plural = 'AboutMe'

    def __str__(self):
        return self.title


class ServicesOffred(models.Model):
    icon_image = models.ImageField(default='', blank=True)
    service_name = models.CharField(max_length=40, blank=True, null=True)
    shadow_icon = models.CharField(max_length=40, blank=True, null=True)
    service_description = models.TextField(
        blank=True, null=True)

    def __str__(self):
        return self.service_name


class MyProgress(models.Model):
    language = models.CharField(max_length=40, blank=True, null=True)
    percentage = models.IntegerField(blank=True, null=True)
    icon = models.CharField(max_length=40, blank=True, null=True)

    def __str__(self):
        return self.language


class Project(models.Model):
    language_used = models.CharField(max_length=100, blank=True, null=True)
    about_avatar = models.ImageField(default='', blank=True)
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True)
    Project_title = models.CharField(max_length=90, blank=True, null=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link =models.URLField(blank=True, null=True)


    def __str__(self):
        return self.Project_title


class MyContact(models.Model):
    icon = models.CharField(max_length=90, blank=True, null=True)
    contact_name = models.CharField(max_length=30, blank=True, null=True)
    contact_info = models.CharField(max_length=100, blank=True, null=True)
