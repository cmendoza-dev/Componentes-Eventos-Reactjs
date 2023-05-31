from django.db import models

# Create your models here.
class Producto(models.Model):
    codigo = models.CharField(max_length=6, verbose_name="Código" )
    descripcion = models.CharField(max_length=100, verbose_name="Descripción")
    precio = models.PositiveIntegerField(verbose_name="Precio")

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def __str__(self):
        return self.nombre
    

    