from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import TicketBookingSerializer
from .models import TicketBooking


class TicketBookingCreateAPIView(APIView):

    def post(self, request):

        serializer = TicketBookingSerializer(data=request.data)

        if serializer.is_valid():
            booking = serializer.save()

            return Response({
                "message": "Booking Successful",
                "booking_id": booking.id
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ReservedSeatsAPIView(APIView):

    def get(self, request):

        data = TicketBooking.objects.values("seat_number", "deck")

        return Response(data=data)

