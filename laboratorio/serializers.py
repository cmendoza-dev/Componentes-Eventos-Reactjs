from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    # imagen_url = serializers.ImageField(use_url=True, required=False)
    class Meta:
        model = Producto
        fields = '__all__'
