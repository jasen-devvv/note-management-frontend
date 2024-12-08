export const formatDate = (timestamp: string): string => {
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',  
        day: '2-digit',   
        month: '2-digit', 
        year: 'numeric'  
    });

    return dateFormatter.format(new Date(timestamp));
}
