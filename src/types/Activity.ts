/**
 * An activity affected by an alert.

| Value                | Description                                                                                                                                                                                                                                                                       |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| '"BOARD"'            | Boarding a vehicle. Any passenger trip includes boarding a vehicle and exiting from a vehicle.                                                                                                                                                                                    |
| '"BRINGING_BIKE"'    | Bringing a bicycle while boarding or exiting.                                                                                                                                                                                                                                     |
| '"EXIT"'             | Exiting from a vehicle (disembarking). Any passenger trip includes boarding a vehicle and exiting a vehicle.                                                                                                                                                                      |
| '"PARK_CAR"'         | Parking a car at a garage or lot in a station.                                                                                                                                                                                                                                    |
| '"RIDE"'             | Riding through a stop without boarding or exiting.. Not every passenger trip will include this -- a passenger may board at one stop and exit at the next stop.                                                                                                                    |
| '"STORE_BIKE"'       | Storing a bicycle at a station.                                                                                                                                                                                                                                                   |
| '"USING_ESCALATOR"'  | Using an escalator while boarding or exiting (should only be used for customers who specifically want to avoid stairs.)                                                                                                                                                           |
| '"USING_WHEELCHAIR"' | Using a wheelchair while boarding or exiting. Note that this applies to something that specifically affects customers who use a wheelchair to board or exit; a delay should not include this as an affected activity unless it specifically affects customers using wheelchairs.  |

 */
export class Activity {
}