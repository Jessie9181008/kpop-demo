import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    @Autowired
    private IdolRepository idolRepository;

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private NewsRepository newsRepository;

    @Override
    public void run(String... args) throws Exception {
        idolRepository.save(new Idol("BTS", "BTS是韓國著名男團"));
        idolRepository.save(new Idol("BLACKPINK", "BLACKPINK是韓國著名女團"));

        songRepository.save(new Song("Dynamite", "BTS的熱門歌曲"));
        songRepository.save(new Song("How You Like That", "BLACKPINK的熱門歌曲"));

        newsRepository.save(new News("BTS獲得Billboard音樂獎", "BTS再次獲得Billboard音樂獎的榮譽"));
        newsRepository.save(new News("BLACKPINK發行新專輯", "BLACKPINK即將發行新專輯"));
    }
}
