import {AccordionGroup,accordionDetailsClasses,accordionSummaryClasses} from '@mui/joy';

export default function VAccordionGroup({ children }){
    return(<>
        <AccordionGroup
                variant="outlined"
                transition="0.2s"
                sx={{
                    mt:3,
                    maxWidth: 1200,
                    borderRadius: 'sm',
                    [`& .${accordionSummaryClasses.button}:hover`]: {
                        bgcolor: 'transparent',
                    },
                    [`& .${accordionDetailsClasses.content}`]: {
                        boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
                        [`&.${accordionDetailsClasses.expanded}`]: {
                          paddingBlock: '0.75rem',
                        },
                    },
                }}
            >
                { children }
            </AccordionGroup>
    </>)
}