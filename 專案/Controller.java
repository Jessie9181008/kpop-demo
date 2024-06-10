import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private IdolRepository idolRepository;

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private NewsRepository newsRepository;

    @GetMapping("/idols")
    public List<Idol> getIdols() {
        return idolRepository.findAll();
    }

    @GetMapping("/songs")
    public List<Song> getSongs() {
        return songRepository.findAll();
    }

    @GetMapping("/news")
    public List<News> getNews() {
        return newsRepository.findAll();
    }
}
