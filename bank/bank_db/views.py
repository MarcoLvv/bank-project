from rest_framework import viewsets, filters, pagination
from .models import Clientes
from .serializers import ClientesSerializer
# Create your views here.

class ClientePagination(pagination.PageNumberPagination):
    page_size = 10  # Número de objetos por página
    page_size_query_param = 'page_size'
    max_page_size = 50  # Máximo número de objetos por página

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Clientes.objects.all().order_by('customer_id')
    serializer_class = ClientesSerializer
    pagination_class = ClientePagination
    def get_queryset(self):
        queryset = super().get_queryset()
        id = self.request.query_params.get('id')
        fecha = self.request.query_params.get('fecha')
        # Registro de los parámetros recibidos para depuración
        print(f"Received id: {id}")
        print(f"Received fecha: {fecha}")
        if id is not None:
            queryset = queryset.filter(customer_id=id)

        if fecha is not None:
            queryset = queryset.filter(loan_origination_datetime=fecha)

        return queryset