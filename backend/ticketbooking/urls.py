from django.urls import path
from .views import TicketBookingCreateAPIView, ReservedSeatsAPIView

urlpatterns = [
    path('create-booking/', TicketBookingCreateAPIView.as_view(), name="create-booking"),
    path('reserved-seats/', ReservedSeatsAPIView.as_view())
]