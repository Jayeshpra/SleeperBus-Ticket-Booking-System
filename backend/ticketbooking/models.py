from django.db import models

# Create your models here.

class TicketBooking(models.Model):

    passenger_name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)

    mobile_number = models.CharField(max_length=15)
    email_address = models.EmailField()

    seat_number = models.CharField(max_length=10)
    deck = models.CharField(max_length=10)
    drop_point = models.CharField(max_length=50)

    ticket_price = models.IntegerField()

    meal_name = models.TextField(blank=True, null=True)
    meal_quantity = models.TextField(blank=True, null=True)
    meal_price = models.TextField(blank=True, null=True)

    total_meal_price = models.IntegerField(default=0)
    grand_total_amount = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.passenger_name} - Seat {self.seat_number}"



