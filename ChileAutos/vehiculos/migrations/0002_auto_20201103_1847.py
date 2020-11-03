# Generated by Django 3.1.2 on 2020-11-03 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehiculos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehiculo',
            name='combustible',
            field=models.CharField(max_length=45),
        ),
        migrations.AlterField(
            model_name='vehiculo',
            name='foto',
            field=models.FileField(max_length=45, upload_to=''),
        ),
        migrations.AlterField(
            model_name='vehiculo',
            name='marca',
            field=models.CharField(max_length=45),
        ),
        migrations.AlterField(
            model_name='vehiculo',
            name='tipoVehiculo',
            field=models.CharField(max_length=45),
        ),
        migrations.AlterField(
            model_name='vehiculo',
            name='transmision',
            field=models.CharField(max_length=45),
        ),
        migrations.AlterField(
            model_name='vehiculo',
            name='uso',
            field=models.CharField(max_length=45),
        ),
        migrations.DeleteModel(
            name='Combustible',
        ),
        migrations.DeleteModel(
            name='EstadoUso',
        ),
        migrations.DeleteModel(
            name='Marca',
        ),
        migrations.DeleteModel(
            name='TipoTransmision',
        ),
        migrations.DeleteModel(
            name='TipoVehiculo',
        ),
    ]
