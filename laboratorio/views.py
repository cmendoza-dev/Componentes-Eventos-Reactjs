from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
# ViewSets define the view behavior.
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    parser_classes = (MultiPartParser, FormParser)
    
