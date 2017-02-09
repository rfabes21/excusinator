from rest_framework import serializers
from .models import Excuse, ExcuseType


class ExcuseTypesSerializer(serializers.HyperlinkedModelSerializer):
    label = serializers.CharField(source="label")

    class Meta:
        model = ExcuseType
        fields = ("label", "id")


class ExcusesSerializer(serializers.HyperlinkedModelSerializer):
    excuse_types = ExcuseTypesSerializer(many=True, read_only=True)

    def to_representation(self, obj):
        data = super(ExcusesSerializer, self).to_representation(obj)
        return data

    class Meta:
        model = Excuse
        fields = ("title", "excuse_copy", "excuse_types")
