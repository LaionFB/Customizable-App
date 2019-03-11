import { DefaultTermsAndConditionsPage } from '../../../_default/pages/terms-and-conditions/terms-and-conditions.page';
import { DefaultInputComponent } from '../../../_default/components/input/input.component';
import { ComponentRef } from '@angular/core';

export class Customer1TermsAndConditionsPage extends DefaultTermsAndConditionsPage{
    protected input: ComponentRef<DefaultInputComponent>;

    ngOnInit(){
        super.ngOnInit();
        
        this.input = this.customArea.createComponent(this.resolver.resolveComponentFactory(DefaultInputComponent));
        this.input.instance.label = 'Disagree?';
        this.input.instance.placeholder = 'If you disagree with our terms, please, tell us why.';
    }
}