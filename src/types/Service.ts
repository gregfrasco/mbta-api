/**
 * Service represents a set of dates on which trips run.
 */
export class Service {
    /**
     * Earliest date which is valid for this service. Format is ISO8601.
     */
    start_date: string;

    /**
     * Describes how well this schedule represents typical service for the listed 'schedule_type'

     | Value | Description                                                                 |
     |-------|-----------------------------------------------------------------------------|
     | '0'   | Not defined.                                                                |
     | '1'   | Typical service with perhaps minor modifications                            |
     | '2'   | Extra service supplements typical schedules                                 |
     | '3'   | Reduced holiday service is provided by typical Saturday or Sunday schedule  |
     | '4'   | Major changes in service due to a planned disruption, such as construction  |
     | '5'   | Major reductions in service for weather events or other atypical situations |

     */
    schedule_typicality: number;

    /**
     * Description of the schedule type the service_id can be applied.
     For example, on a holiday, the schedule_type value may be "Saturday" or "Sunday".
     Current valid values are "Weekday", "Saturday", "Sunday", or "Other"

     */
    schedule_type: string;

    /**
     * Description of when the 'service_id' is in effect.
     */
    schedule_name: string;

    /**
     * Latest date which is valid for this service. Format is ISO8601.
     */
    end_date: string;

    /**
     * Human-readable description of the service, as it should appear on public-facing websites and applications.
     */
    description: string;

}