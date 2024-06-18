# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Clientes(models.Model):
    customer_id = models.IntegerField(primary_key=True, unique=True)
    loan_id = models.IntegerField(blank=True, null=True)
    acc_creation_datetime = models.DateTimeField(db_column='ACC_CREATION_DATETIME', blank=True, null=True)
    application_datetime = models.DateTimeField(db_column='APPLICATION_DATETIME', blank=True, null=True)
    loan_origination_datetime = models.DateTimeField(db_column='LOAN_ORIGINATION_DATETIME', blank=True, null=True)
    max_days_late = models.IntegerField(blank=True, null=True)
    target = models.IntegerField(blank=True, null=True)
    account_to_application_days = models.IntegerField(blank=True, null=True)
    n_sf_apps = models.FloatField(blank=True, null=True)
    first_app_date = models.DateTimeField(blank=True, null=True)
    last_app_date = models.DateTimeField(blank=True, null=True)
    n_bnpl_apps = models.FloatField(blank=True, null=True)
    n_bnpl_approved_apps = models.FloatField(blank=True, null=True)
    first_bnpl_app_date = models.DateTimeField(blank=True, null=True)
    last_bnpl_app_date = models.DateTimeField(blank=True, null=True)
    n_inquiries_l3m = models.FloatField(blank=True, null=True)
    n_inquiries_l6m = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'main_data'


class HistorialClientes(models.Model):
    customer_id = models.ForeignKey(Clientes, on_delete=models.CASCADE, related_name='credit_histories')
    inquiry_time = models.DateTimeField(db_column='INQUIRY_TIME', blank=True, null=True)
    cdc_inquiry_id = models.CharField(db_column='CDC_INQUIRY_ID', max_length=255, blank=True, null=True)
    inquiry_date = models.DateTimeField(db_column='INQUIRY_DATE', blank=True, null=True)
    prevention_key = models.CharField(db_column='PREVENTION_KEY', max_length=255, blank=True, null=True)
    currency = models.CharField(db_column='CURRENCY', max_length=255, blank=True, null=True)
    max_credit = models.FloatField(db_column='MAX_CREDIT', blank=True, null=True)
    credit_limit = models.FloatField(db_column='CREDIT_LIMIT', blank=True, null=True)
    payment_amount = models.FloatField(db_column='PAYMENT_AMOUNT', blank=True, null=True)
    update_date = models.DateTimeField(db_column='UPDATE_DATE', blank=True, null=True)
    loan_opening_date = models.DateTimeField(db_column='LOAN_OPENING_DATE', blank=True, null=True)
    loan_closing_date = models.DateTimeField(db_column='LOAN_CLOSING_DATE', blank=True, null=True)
    worst_delay_date = models.DateTimeField(db_column='WORST_DELAY_DATE', blank=True, null=True)
    report_date = models.DateTimeField(db_column='REPORT_DATE', blank=True, null=True)
    last_purchase_date = models.DateTimeField(db_column='LAST_PURCHASE_DATE', blank=True, null=True)
    last_payment_date = models.DateTimeField(db_column='LAST_PAYMENT_DATE', blank=True, null=True)
    payment_frequency = models.CharField(db_column='PAYMENT_FREQUENCY', max_length=255, blank=True, null=True)
    business_type = models.CharField(db_column='BUSINESS_TYPE', max_length=255, blank=True, null=True)
    credit_type = models.CharField(db_column='CREDIT_TYPE', max_length=255, blank=True, null=True)
    account_type = models.CharField(db_column='ACCOUNT_TYPE', max_length=255, blank=True, null=True)
    responsability_type = models.CharField(db_column='RESPONSABILITY_TYPE', max_length=255, blank=True, null=True)
    total_payments = models.FloatField(db_column='TOTAL_PAYMENTS', blank=True, null=True)
    delayed_payments = models.FloatField(db_column='DELAYED_PAYMENTS', blank=True, null=True)
    current_payment = models.CharField(db_column='CURRENT_PAYMENT', max_length=255, blank=True, null=True)
    worst_delay = models.FloatField(db_column='WORST_DELAY', blank=True, null=True)
    total_reported_payments = models.FloatField(db_column='TOTAL_REPORTED_PAYMENTS', blank=True, null=True)
    current_balance = models.FloatField(db_column='CURRENT_BALANCE', blank=True, null=True)
    balance_due = models.FloatField(db_column='BALANCE_DUE', blank=True, null=True)
    balance_due_worst_delay = models.FloatField(db_column='BALANCE_DUE_WORST_DELAY', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'credit_history'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class ProductosProductos(models.Model):
    id = models.BigAutoField(primary_key=True)
    imagen = models.CharField(max_length=100)
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=11, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'productos_productos'
