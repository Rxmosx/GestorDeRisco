from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'password', 'matricula']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = Usuario(
            username=validated_data['username'],
            email=validated_data.get('email'),
            matricula=validated_data.get('matricula')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
