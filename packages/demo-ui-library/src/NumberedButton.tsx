
import React, { PureComponent} from 'react';

let COUNTER = 1;

type Props = {
    prefix?: string;
}

export default class NumberedButton extends PureComponent<Props> {

    num: number;

    constructor(props: Props) {
        super(props);
        this.num = COUNTER ++;
    }

    render() {
        const { prefix } = this.props;

        return (
            <button type='button'>
                {prefix || 'Button'} {'#'}{this.num}
            </button>
        );
    }
}
