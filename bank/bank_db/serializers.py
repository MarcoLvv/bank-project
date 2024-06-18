from .models import Clientes, HistorialClientes
from rest_framework import serializers
from datetime import datetime

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = '__all__'

        # Método para formatear las fechas según tu preferencia
    # def to_representation(self, instance):
    #     data = super().to_representation(instance)
    #     if 'acc_creation_datetime' in data and isinstance(data['acc_creation_datetime'], str):
    #         data['acc_creation_datetime'] = datetime.strptime(data['acc_creation_datetime'],'%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'application_datetime' in data and isinstance(data['application_datetime'], str):
    #         data['application_datetime'] = datetime.strptime(data['application_datetime'],'%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'first_app_date' in data and isinstance(data['first_app_date'], str):
    #         data['first_app_date'] = datetime.strptime(data['first_app_date'], '%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'first_bnpl_app_date' in data and isinstance(data['first_bnpl_app_date'], str):
    #         data['first_bnpl_app_date'] = datetime.strptime(data['first_bnpl_app_date'], '%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'last_app_date' in data and isinstance(data['last_app_date'], str):
    #         data['last_app_date'] = datetime.strptime(data['last_app_date'], '%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'last_bnpl_app_date' in data and isinstance(data['last_bnpl_app_date'], str):
    #         data['last_bnpl_app_date'] = datetime.strptime(data['last_bnpl_app_date'], '%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     if 'loan_origination_datetime' in data and isinstance(data['loan_origination_datetime'], str):
    #         data['loan_origination_datetime'] = datetime.strptime(data['loan_origination_datetime'],'%Y-%m-%dT%H:%M:%SZ').strftime('%d/%m/%Y %H:%M:%S')
    #
    #     return data

        # read_only_fields = ('id',)
        # write_only_fields = ('id',)
        # depth = 1
        # depth_first = True
        # depth_limit = None


class HistorialClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialClientes
        fields = '__all__'
        # read_only_fields = ('id',)
        # write_only_fields = ('id',)
        # depth = 1
        # depth_first = True
        # depth_limit = None
