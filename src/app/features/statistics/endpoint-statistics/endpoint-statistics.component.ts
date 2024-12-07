import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { EndpointStatistics } from 'src/app/interfaces/endpoint-statistics';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-endpoint-statistics',
  templateUrl: './endpoint-statistics.component.html',
  styleUrls: ['./endpoint-statistics.component.scss']
})
export class EndpointStatisticsComponent {

  @Input() endpointStatistics!: EndpointStatistics;

  safeEndpointId?: SafeHtml;

  public limitForm: FormGroup;

  constructor(private fb: FormBuilder, private statisticsService: StatisticsService, public toastr: ToastrService) {
    this.limitForm = this.fb.group({
      limit: [this.endpointStatistics?.requestsLimit ?? '', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.limitForm.valid) {
      const limit = this.limitForm.get('limit')?.value;
      this.statisticsService.updateEndpointLimit(this.endpointStatistics.endpointId, limit).subscribe({
        next: () => {
          this.toastr.success('Limit updated successfully!');
          this.endpointStatistics.requestsLimit = limit;
        },
        error: (err) => {
          console.error('Error updating limit:', err);
          this.toastr.error('Failed to update limit. Please try again.');
        },
      });
    }
  }
}
