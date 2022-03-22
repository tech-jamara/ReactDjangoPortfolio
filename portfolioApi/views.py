from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *


@api_view(['GET'])
def get_intoductionDetails(request):
    intro_details = HomeDetails.objects.all()
    serializer = Home_detailsSerializer(intro_details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_AboutMeDetails(request):
    details = AboutMe.objects.all()
    serializer = About_meSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_ServicesOffred(request):
    details = ServicesOffred.objects.all()
    serializer = ServicesOffredSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_Projects(request):
    details = Project.objects.all()
    serializer = ProjectSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_MyContact(request):
    details = MyContact.objects.all()
    serializer = MyContactSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_SocialMediaLinks(request):
    details = SocialMediaLinks.objects.all()
    serializer = SocialMediaLinksSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_MyProgress(request):
    details = MyProgress.objects.all()
    serializer = MyProgressSerializer(details, many=True)
    return Response(serializer.data)
