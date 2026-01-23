from rest_framework import serializers
from .models import TicketBooking


class TicketBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketBooking
        fields = '__all__'

