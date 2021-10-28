import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { findByLabelText } from "@testing-library/dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(12),
        // margin:theme.spacing(3,40),
        // border: "1px solid #444",
        // borderRadius: "5px",

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '600px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },

    },
    dateFormat: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiTextField-root': {
            margin: theme.spacing(5, 1),
            width: '190px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    }
}))

const Home = () => {
    const classes = useStyles()
    return (

        <from className={classes.root}>
            <Typography>Project Overview</Typography>
            <TextField
                label="Project Finance Code"
                variant="standard"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Project Title"
                variant="standard"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Funding Institute"
                variant="standard"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Amount Budget"
                variant="standard"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="IRB Number Given"
                variant="standard"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <div className={classes.dateFormat}>
                <TextField
                    label="Date of Approval"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
                <TextField
                    label="Project Start Date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
                <TextField
                    label="Project End Date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
            </div>

            {/* <TextField
                label="IRB Number Given"
                variant="standard"
                type="select"
                required
            // onChange = {}
            // value={'4455590'}
            /> */}

        </from>
    )
}

export default Home
