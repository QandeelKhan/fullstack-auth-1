# Generated by Django 4.0.6 on 2022-08-17 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alter_reset_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tfa_secret',
            field=models.CharField(default='', max_length=255),
        ),
    ]
