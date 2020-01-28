import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Samples',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },{
                id       : 'usermanagement',
                title    : 'Users',
                translate: 'NAV.USERS.TITLE',
                type     : 'item',
                icon     : 'user',
                url      : '/usermanagement',
                badge    : {
                    title    : '25',
                    translate: 'NAV.USERS.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
        ]
    }
];
