# Generated by Django 4.0.6 on 2022-07-25 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_reset'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reset',
            name='email',
            field=models.CharField(max_length=255),
        ),
    ]
