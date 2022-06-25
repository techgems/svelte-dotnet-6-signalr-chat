namespace signalr_chat.Services;

public record ColorModel(string Label, string TextColor, string BackgroundColor) 
{
    public bool IsTaken { get; set; }
};

public interface IColorService
{
    void UnmarkColorAsTaken(string label);
    
    void MarkColorAsTaken(string label);
    List<ColorModel> GetAvailableColors();
    List<ColorModel> GetAllColors();

}

public class ColorService : IColorService
{
    private readonly List<ColorModel> colorList = new List<ColorModel>();

    public ColorService()
    {
        colorList.Add(new ColorModel("Red", "#FFF", "#dc2626"));
        colorList.Add(new ColorModel("Orange", "#FFF", "#ea580c"));
        colorList.Add(new ColorModel("Amber", "#FFF", "#f59e0b"));
        colorList.Add(new ColorModel("Yellow", "#FFF", "#facc15"));
        colorList.Add(new ColorModel("Lime", "#FFF", "#84cc16"));
        colorList.Add(new ColorModel("Cyan", "#FFF", "#22d3ee"));
        colorList.Add(new ColorModel("Blue", "#FFF", "#0ea5e9"));
        colorList.Add(new ColorModel("Purple", "#FFF", "#6d28d9"));
        colorList.Add(new ColorModel("Pink", "#FFF", "#ec4899"));
        colorList.Add(new ColorModel("Crimson", "#FFF", "#f43f5e"));
    }

    public List<ColorModel> GetAvailableColors()
    {
        return colorList.Where(x => x.IsTaken == false).ToList();
    }

    public List<ColorModel> GetAllColors()
    {
        return colorList;
    }

    public void MarkColorAsTaken(string label)
    {
        foreach(var color in colorList)
        {
            if(color.Label == label)
            {
                color.IsTaken = true;
                break;
            }
        }
    }

    public void UnmarkColorAsTaken(string label)
    {
        foreach (var color in colorList)
        {
            if (color.Label == label)
            {
                color.IsTaken = false;
                break;
            }
        }
    }
}

