import { ActivatedRoute }                       from '@angular/router';
import { Component, OnInit, ViewContainerRef }  from '@angular/core';
import { Router }                               from '@angular/router';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';

import { Modal }                                from 'angular2-modal/plugins/bootstrap';

import { SettingService }                       from './setting.service';
import { ValidationService }                    from './validation.service';

@Component ({
    selector:     'et-settings'
    ,templateUrl: 'app/settings/settings.component.html'
    ,styleUrls:   [ 'app/settings/settings.component.css' ]
    ,providers:   [ Modal ]
})

export class SettingsComponent implements OnInit {
    settingsForm: FormGroup;
    name: string;
    MIN_VALUE = -9999;
    MAX_VALUE = 9999;

    constructor(private router: Router, 
                private route: ActivatedRoute, 
                private settingService: SettingService,
                private formBuilder: FormBuilder,
                private vcRef: ViewContainerRef, 
                public modal: Modal) {

        modal.overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        /* Initialize this.* bindable members with formData.* members */
        let formData = this.route.snapshot.data['settings'];
        this.name = formData.name;
        this.buildForm(formData);
        console.log('Settings feature loaded!');
    }

    buildForm(data): void {
        // Define and initialize each settingsForm property with [ initial value, a list of validators]
        this.settingsForm = this.formBuilder.group ({
            'id': [data.id, Validators.required],
            'name': [data.name, Validators.required],
            'revenue2013': [data.revenue2013, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'profit2013': [data.profit2013, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'revenue2014': [data.revenue2014, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'profit2014': [data.profit2014, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'revenue2015': [data.revenue2015, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'profit2015': [data.profit2015, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'revenue2016': [data.revenue2016, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'profit2016': [data.profit2016, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'revenue2017': [data.revenue2017, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]],
            'profit2017': [data.profit2017, [Validators.required, ValidationService.minValidator(this.MIN_VALUE), ValidationService.maxValidator(this.MAX_VALUE)]]
        });
    }

    gotoDashboard(): void {
        // Navigate to the dashboard page
        this.router.navigate(['/dashboard']);
    }

    checkForm(): boolean {
        // Return true if settingsForm is invalid or is not dirty
        return (!this.settingsForm.valid || !this.settingsForm.dirty);
    }

    onSubmit() {
        if (this.checkForm()) 
            return;

        // The settingsForm.value returns the form model
        this.settingService.updateIncome(this.settingsForm.value)
            .subscribe(data => {
                if (data && data > 0) {
                    this.modal.alert()
                        .size('sm')
                        .isBlocking(true)
                        .showClose(true)
                        .title('Success')
                        .message('Save operation completed!')
                        .open();
                }
                else {
                    this.modal.alert()
                        .size('sm')
                        .isBlocking(true)
                        .showClose(true)
                        .title('Error')
                        .message('Failed to save!')
                        .open();
                }
            });
    }
}